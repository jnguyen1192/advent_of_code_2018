import unittest
import numpy as np
import sys
import time
from parse import parse
import re


def input_file():
    # return the input file in a text
    file = open('input', 'r')
    text = file.read()
    file.close()
    return text


def output_file():
    # read line of output file
    file = open('output', 'r')
    res = [line.rstrip('\n') for line in file]
    file.close()
    return res


class Position:
    # class that illustrate a point
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def get_position(self):
        # return the current position
        return self.x, self.y

    def get_x(self):
        # return the current position
        return self.x

    def get_y(self):
        # return the current position
        return self.y

    def set_position(self, x, y):
        # set the current position
        self.x = x
        self.y = y

    def move(self, vx, vy):
        # move into the next position using
        self.x += vx
        self.y += vy


class Velocity:
    # class that illustrate a velocity
    def __init__(self, vx, vy):
        self.vx = vx
        self.vy = vy

    def get_velocity(self):
        # return the velocity
        return self.vx, self.vy


class Cloud_point:
    # class that illustrate a node containing header, child nodes and metadata entries
    def __init__(self, position, velocity):
        self.position = position
        self.velocity = velocity

    def step(self):
        # get the current velocity
        vx, vy = self.velocity.get_velocity()
        # move into the next position
        self.position.move(vx, vy)


class Cloud:
    # class that illustrate all the points of the cloud with the respectives velocities
    def __init__(self, cloud_points, velocities):
        self.cloud_points = cloud_points
        self.velocities = velocities
        self.max_y, self.max_x = self.get_dimension_max()
        self.cloud = np.full((self.max_y, self.max_x), False)
        self.string_cloud = ""

    def step_cloud(self):
        # print the cloud
        self.print_cloud()
        # move all cloud by one step
        for i in range(len(self.cloud_points)):
            self.cloud_points[i].step()
        # wait
        time.sleep(1)
        # flush stdout
        sys.stdout.flush()

    def refresh_cloud_points(self):
        self.cloud = np.full((self.max_y, self.max_x), False)
        for cloud_point in self.cloud_points:
            self.cloud[cloud_point.get_y()][cloud_point.get_x()] = True

    def get_dimension_max(self):
        # get the max x and y of the cloud
        max_x, max_y = (0, int(float('inf')))
        for i in range(len(self.cloud_points)):
            if max_x < self.cloud_points[i].get_x():
                max_x = self.cloud_points[i].get_x()
            if max_y > self.cloud_points[i].get_y():
                max_y = self.cloud_points[i].get_y()
        return max_y, max_x

    def print_cloud(self):
        # print the cloud using array of points
        self.refresh_cloud_points()
        # get number line of cloud
        number_line_cloud = self.cloud.shape[1]
        # get number column of cloud
        number_column_cloud = self.cloud.shape[0]
        string_cloud = ""
        for i in range(number_line_cloud):
            for j in range(number_column_cloud):
                if self.cloud_points[i][j]:
                    string_cloud += "#"
                else:
                    string_cloud += "."
            string_cloud += "\n"
        print(string_cloud)

    def exec(self, time):
        # execute the print cloud step by step
        for i in range(time):
            self.step_cloud()


def data_retrieve(text):
    # return the new text traited
    data = [tuple(parse("position=< {:d}, {:d}> velocity=< {:d}, {:d}>", l)) for l in
                 text.split('\n')]
    return data


def data_preparation(data):
    # return the cloud points and velocities associated
    cloud_points = []
    velocities = []
    # fufill the cloud points and velocities using input text
    for raw in data:
        cloud_points.append(Cloud_point(raw[0], raw[1]))
        velocities.append(Velocity(raw[2], raw[3]))
    return cloud_points, velocities


def day_10_part_1(text):
    # data retrieve
    data = data_retrieve(text)
    # data preparation
    cloud_points, velocities = data_preparation(text)
    # data modelisation
    cloud = Cloud(cloud_points, velocities)
    # data analyse
    cloud.exec()
    # data visualize
    #metadata_searcher.print_node()
    return str(0)


class TestDay10part1(unittest.TestCase):

    def test_day_10_part_1(self):
        text = input_file()
        res = output_file()
        pred = day_10_part_1(text)
        assert(pred == res[0])


if __name__ == '__main__':
    unittest.main()

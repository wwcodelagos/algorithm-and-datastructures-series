# Time complexity(Average, Best and Worst case) = 0(n^2)

from operator import le
from turtle import left, right


def merge_sort(array):

    # recursively didvide your list into 2 equal parts until each part has one or zero number(s)
    if(len(array) <= 1):
        return array

    # get the middle point of the array
    n = len(array)
    mid_point = n//2

    left_array = array[:mid_point]
    right_array = array[mid_point:]

    # recursively run the merge sort on left and right array
    left_array = merge_sort(left_array)
    right_array = merge_sort(right_array)

    return merge_list(left_array, right_array)



def merge_list(left_array, right_array):
    # This is used to join the splitted array back to the original array in sorted form

    res = []
    n = len(left_array)
    m = len(right_array)


    while(len(left_array) > 0 and len(right_array) > 0):
        if(left_array[0] < right_array[0]):
            res.append(left_array[0])
            left_array.remove(left_array[0])

        else:
            res.append(right_array[0])
            right_array.remove(right_array[0])


    
    if(len(left_array) == 0):
        res = res + right_array
    else:
        res = res + left_array

    return res



test_array  = [3, 0, 6, -5, 1, 8, 9, -2]
res = merge_sort(array= test_array)
print(res)
# Time complexity(Average and Worst case) = 0(n^2)
# Time Complexity(Best case) = 0(n) : When the array to be sorted is already sorted 

from unittest import result


def insertion_sort(array):
    
    n = len(array)

    # loop through the array to place each element in the correct position starting from 
    # the second element because there is nothing to compare the first element to
    for i in range(1, n):
        # curr_elem is the number we want to place in the right position
        curr_num = array[i]

        # j is the index of the element before curr_elem and also where we start comparing from
        j = i -1

        while (j >= 0 and curr_num < array[j]):
            # we move the bigger number to the right and decrement our j to compare curr_num with the next number
            array[j+1] = array[j]
            j = j-1

        # place curr_num in the right position
        array[j+1] = curr_num
    
    return array


test_array  = [3, 0, 6, 1, 8, 9]
res = insertion_sort(array= test_array)
print(res)
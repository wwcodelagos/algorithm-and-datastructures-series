# Time complexity(Average, Best and Worst case) = 0(n^2)

def selection_sort(array):

    n = len(array)

    for i in range(n):
        min_index = i

        for j in range(i+1, n):
            # loop through the rest if the array to find the new min_index if there is a number lower than array[i]
            if(array[j] < array[min_index]):
                min_index = j

        # once we have gotten the minimum number in the unsorted array, we move to the correct position
        array[min_index], array[i] = array[i], array[min_index]

    return array


test_array  = [3, 0, 6, 1, 8, 9, -2]
res = selection_sort(array= test_array)
print(res)
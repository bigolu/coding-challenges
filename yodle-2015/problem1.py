#example showed on yodel page
example = [[5]], [[9],[6]], [[4],[6],[8]], [[0], [7], [1], [5]]

#read in triangle.txt
text = open('triangle.txt')
triangle = text.readlines()

#put all numbers in array named allNums
allNums = []

for str in triangle:
	temp = []
	i = 1
	for num in str.split():
		temp.append([int(num)])

		i = i + 1
	allNums.append(temp)


#function to calculate max total and print it to console
def triMax(allNums):

	for j in range(len(allNums)):
		if(j == len(allNums) - 1):
			break

		temp = []
		for nums in range(len(allNums[j + 1])):
			temp.append(allNums[j + 1][nums][0])
			allNums[j + 1][nums] = []

		#calculate possible sums
		for index in range(len(allNums[j])):
			for k in range(len(allNums[j][index])):

				allNums[j + 1][index].append(temp[index] + allNums[j][index][k])
				allNums[j + 1][index + 1].append(temp[index +1] + allNums[j][index][k])

		#sort possible sums and only keep the highest one
		for index in range(len(allNums[j + 1])):
			print "Possiblemaxes: %s" %(allNums[j + 1][index])
			allNums[j + 1][index].sort()
			allNums[j + 1][index] = [allNums[j + 1][index][len(allNums[j + 1][index]) - 1]]
			print "The max: %s" %(allNums[j + 1][index])

	possibleMaxes = []

	print "done!"

	for index in range(len(allNums[len(allNums) - 1])):
		for nums in allNums[len(allNums) - 1][index]:
			possibleMaxes.append(nums)

			print possibleMaxes
	possibleMaxes.sort()
	print "The Max Total is: %s"    %(possibleMaxes[len(possibleMaxes) - 1])


#call function with the 100 row triangle
triMax(example)

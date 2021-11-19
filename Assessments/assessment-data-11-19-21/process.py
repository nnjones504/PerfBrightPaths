log_file = open("um-server-01.txt") ## opens file


def sales_reports(log_file):  ## declares function and accepts 1 argument which should be a file
    for line in log_file: # loop through each line in file
        line = line.rstrip() # remove trailing spaces
        day = line[0:3] # gets first 3 chars from line and sets as day
        if day == "Tue": # checks if day is Tue
            print(line) # prints the line if day is True
sales_reports(log_file)
 
## Extra Credit 
def filterByAmount(log_file, num):
    for line in log_file:
        amount = line.rstrip().split(" ")[2]
        if int(amount) > num:
            print(line)

filterByAmount(log_file,10)
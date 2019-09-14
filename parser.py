import csv

json_string = '['

with open('people_data.csv') as csvfile: 
    reader = csv.reader(csvfile) 
    isPerson = True

    for row in reader: 
        phrase = (row[0][0]).upper() + row[0][1:]
        if isPerson:
            json_string += f'{{ "name": "{phrase}",'
        else:
            json_string += f'"description": "{phrase}" }},'
        
        isPerson = not isPerson
    
json_string = json_string[:-1]
json_string += ']'

print(json_string)



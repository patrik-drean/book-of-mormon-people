import csv

json_string = '['

with open('people_data.csv') as csvfile: 
    reader = csv.reader(csvfile) 
    isPerson = True

    for row in reader: 
        if isPerson:
            json_string += f'{{ "name": "{row[0]}",'
        else:
            json_string += f'"description": "{row[0]}" }},'
        
        isPerson = not isPerson
    
json_string = json_string[:-1]
json_string += ']'

print(json_string)



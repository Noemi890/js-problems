# Pseudo Code Solution
```
for i = 0 i < word.length
IF word[index] is found in object
push into an array the value of that key
OR
push into an array the word[index]
```

```
object.entries.map to swap the key value properties in the object and put them in an array in pairs
return object.fromEntries to join them again in an object
```

```
call swap function and store the result in a variable
call toMorseCode function to get an array with my word converted in morse code and store that in another variable
call again toMorseCode function with the two new variables as a parameter to get my word back as the original state and store it into another variable
return the last variable
```
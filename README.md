# Password Generator

This repo contains the code for a password generated that allows the user to generate a password containing randomly selected characters of 4 character types (uppercase, lowercase, numbers, and symbols) which the user can toggle on or off using confirms. The user can also choose a character count for their password between 8 and 128. I initially attempted to complete this assignment using CharCode functions (i.e. function randomLowerCase() {return String.fromCharCode(Math.floor(Math.random() * 26) + 97);} for a random lowercase character between a and z). However, I could not figure out how to 1) toggle these functions on and off using the confirms and 2) change the character from each character type from a set value (i.e. a, H, 7, ?, repeating throughout the password).
I scrapped the CharCode approach and used arrays containing the full set of characters I needed for each character type, and was able to use the push() method to include only the character types that I wanted into my "charTypesArray." Then, inside a while loop, I used a for loop to get a random character from a random character type of the ones selected by the user.

Screenshots:

<img width="448" alt="Screen Shot 2021-04-02 at 2 26 49 PM" src="https://user-images.githubusercontent.com/79947732/113455492-9bfcba80-93bf-11eb-963c-524adf6beeba.png">
<img width="448" alt="Screen Shot 2021-04-02 at 2 27 05 PM" src="https://user-images.githubusercontent.com/79947732/113455494-9d2de780-93bf-11eb-88cf-04e8cdbb545d.png">
<img width="804" alt="Screen Shot 2021-04-02 at 2 27 35 PM" src="https://user-images.githubusercontent.com/79947732/113455497-9e5f1480-93bf-11eb-8c7f-be1c6c8f5f41.png">

Link to deployed page: https://bgerner.github.io/password-generator/

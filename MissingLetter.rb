alphabet = "abcdefghijklmnopqrstuvwxz" #On peut faire une liste de string sans faire d'array et ça prendra quand même la bonne place dans l'index
input = ['a','b','c','d','f',"g"]


for i in 0..input.count do        #boucle for= for a in ... do
    if input[i]!=alphabet[i] then
        puts alphabet[i] 
        break
    end
    end
        

    
  

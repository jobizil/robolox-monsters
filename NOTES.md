Optional: map() + key attribute
A good rule of thumb as to when to use the key attribute is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

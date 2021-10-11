# Music_Library_Frontend
Front End for displaying, searching, and adding to a music library.

## Notes

I know a search would make more sense to search just a term against all the listed categories, but I wanted to try a dropdown and but also wanted to try using '.include' so I did so in the genres.  

In hindsight (and as a note to myself), I should have made my DisplaySongs a class component rather than having to pass everything back to the app.  Because other things branch off the Display Songs, it would have been easier to have that be my pathway rather than the app.  I don't want to restructure this, as it's working and all good, but lesson for the future.  I also should have set more things in my master CSS because I repeated little bits of my styling as I went, but originally, I wasn't sure that I wanted them all the same.  However, I realized I could have set the general style and then modified a few if I later decided to, but by then, I had already done half of them individually so I finished that way.
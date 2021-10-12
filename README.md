# Music_Library_Frontend
Front End for displaying, searching, and adding to a music library.  This music library features the ability to add, edit, delete, and view songs within a connected database.  Edits are featured in a modal and details are featured in a dropdown view.  

![Image](http://url/FullScreen.png)

## Notes

I know a search would make more sense to search just a term against all the listed categories, but I wanted to try a dropdown and but also wanted to try using '.include' so I did so in the genres.  

![Image](http://url/Details.png)

I also want to address the lack of the "like" counter.  I have the like button and it does, in the database, give a like to said song as it should.  Not displaying the like counter in the details is a conscious descision.  A while back there was talk of Instagram and other social medias removing the like counters and it was something I supported.  While I think an artist or creator should be able to see those details, I chose to leave it off the public display.

![Image](http://url/EditSong.png)

In hindsight (and as a note to myself), I should have made my DisplaySongs a class component rather than having to pass everything back to the app.  Because other things branch off the Display Songs, it would have been easier to have that be my pathway rather than the app.  I don't want to restructure this, as it's working and all good, but lesson for the future.  I also should have set more things in my master CSS because I repeated little bits of my styling as I went, but originally, I wasn't sure that I wanted them all the same.  However, I realized I could have set the general style and then modified a few if I later decided to, but by then, I had already done half of them individually so I finished that way.
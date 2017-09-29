![](https://res.cloudinary.com/dzqrzline/image/upload/v1506715559/gyrelogo_zxvpo4.gif)

# Gyre
[Gyre](https://gyre.herokuapp.com/#/) is a poetry-themed attempt at cloning the annotation functionality
 of [Genius](https://genius.com/) with an emphasis on user experience.

## Primary Features
- Browsable and searchable database of poems and their authors
- Create annotations on the text of the poems for other users to see.
- Commenting on and rating annotations through a vote system.

## Stack
- Backend
  - [Heroku](https://www.heroku.com/)
  - [Ruby on Rails](http://rubyonrails.org/)
  - [PostgreSQL](https://www.postgresql.org/)
- Frontend
  - [React](https://reactjs.org/)
  - [Redux](http://redux.js.org/)
- Tools
  - [Atom](https://atom.io/)
  - [Cloudinary](https://cloudinary.com/)

## Challenges Encountered
The primary feature of this app is the creation and rendering of annotations for any given poem in the database. The following are some of the challenges encountered while implementing this feature.

#### Rendering Highlights
The first hurdle that had to be overcome was the rendering of annotated text within the body of the poem. This text had to be highlighted to differentiate it with unannotated text and had to summon the associated annotation information on click.

![](http://res.cloudinary.com/dzqrzline/image/upload/v1506723348/Screen_Shot_2017-09-29_at_3.11.42_PM_xzd767.png)

This was accomplished by storing the start and end index for each annotation in the database and iterating through the characters of the poem being rendered and simply checking if the current index against these endpoints for any of the poems associated annotations. If a start index is found, a new span, clickable span is created to contain all the text between the annotations two endpoints.


<!-- #### User Workflow

  -->

#### Passing the Y-offset to Annotations

Some poems are very short - maybe just a line or two. Some poems, however, can span pages. Due to this, the corresponding annotation or annotation form must be rendered with the right y-offset to ensure it is alongside the text a user is viewing.

One solution might be to store this y-axis data with each annotation. However, this would be more data to store on the backend and retrieve every time an annotation is rendered. It would also mean all of this data might have to be updated if the app were to undergo a restyling.

A better solution is to simply grab the y-offset of the cursor's position relative to the top of the poem's container using , and pass this along as top margin to the associated annotation component.

```javascript
findHeight(e) {
  this.height = e.nativeEvent.offsetY;
}
  ```
`nativeEvent.offsetY` grabs the current y-offset.

```javascript
annotationSpace = <button className="session-form-button start-anno"
                          onClick={this.startAnnotation}
                          style={{marginTop: this.height + 145 }}
                          >Start Annotation</button>;
```
And the offset is passed along (with an adjustment) to the correct component as in-line styling.


#### CSS Tricks

Whitespace is very important when it comes to poetry, and to maintain the correct spacing of poems I used
`whitespace: pre-wrap`
to avoid having to use an `<br>` elements.

A potential issue that cropped up when planning out annotation creation was how to avoid users overwriting an older annotation. CSS provided an easy solution to this.
`user-select: none;`
makes selecting already annotated text impossible, and any selection the extends over an already annotated span automatically invalid.

## Planned features
- [x] Search
- [ ] Searchable tags for types of poems (Sonnets, Haiku, etc...)
- [ ] Embedded Video
- [ ] [Queneau's 100,000,000,000 Sonnets generator](http://www.growndodo.com/wordplay/oulipo/10%5E14sonnets.html)

## Credits
Thanks to:
- [App Academy](https://www.appacademy.io/), the instructors and fellow students that helped throughout the development process.
- [poetrydb](http://poetrydb.org/index.html), a web api for poets.

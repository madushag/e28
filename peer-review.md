## P3 Peer Review

+ Reviewer's name: Madusha Gamage
+ Reviwee's name: Ashley Davis
+ URL to reviewee's Github repo: *https://github.com/andmade/e28*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
During the load of the initial page of the site, the DevTools indicated the following warning : `Resource interpreted as Stylesheet but transferred with MIME type text/html: "http://p3.andmade.me/css/mystyles.css".` There weren't any other warnings or errors that I could see in the applciation.

### Were there any parts of the interface that you found confusing or unclear?
The home page lists Featured Events on the right section of the page. Each event is listed with an icon indicating if the even is held online. The vertical alignment of this icon can be improved to provide better separation between each event.

When a Featured Event is clicked you are taken to the Event Details page. The list of Categories is shown on the left side of this page. It would be nice if the category to which the event belongs to is selected or visually indicated somehow, as that is not apparent with the current design.

Everything else about the UI is well designed and flows quite nicely.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
There appears to be unused and unimplemented references to a "Search" feature (e.g. in route definitions in main.js). I'm guessing the developer intended to implement this feature but didn't do so before submission. Generally leaving orphaned code in a codebase is not a good practice as that can be confusing.

Most methods are self explanatory, but certain operations being performed within "mounted" methods could be supplemented with a few comments to describe the intent of the code.

For e.g., the code snippet below is from the mounted method of the EventPage.vue component.
``` 
  global.axios.get(global.config.api).then(response => {
      let events = response.data;
      this.id = this.$route.params.id;
      let targetID = this.id;
      this.event = global._.find(events, function(evt) {
        return targetID == evt.eventID;
      });
      this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      this.bookmarked = global._.includes(this.bookmarks, parseInt(this.id));
    });
 ```

### Are there any parts of the code that you found interesting or taught you something new?
This developer used several new third party libraryes/frameworks that I've not seen before, namely Bulma, Lodash, moment.js, string-strip-html. All of these are new to me and I'm glad I was introduced to them. Although Bulma is yet another CSS framework and has very similar capabilities to Bootsrap, which I'm familiar with, it's always good to learn about other options. 

The developer also used a new Vue functionality that I've not had experience with, i.e. filters. After reading this codebase and the Vue documentation, I'm now fully familiar with this concept.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
I did not encounter any such instances.

### Do you have any additional comments not covered in the above questions?
The overall codebase for this application appears to have been put together with careful thought, and barring the few minor shortcomings I've listed above, I commend the author for a well written application.

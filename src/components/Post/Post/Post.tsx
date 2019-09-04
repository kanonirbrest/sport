import React from 'react'
import s from './Post.module.css'

export default function Post() {
    console.log('post')
    return (
        <main>
            <div className={s.postWrapper}>
                {text}
            </div>
        </main>
    )
}

const text = `
This article was co-published with Source.
The scene is total chaos: a woman and all her purse's contents in middair as she trips over a child's toy, a man hastily 
trying to gather his spilled laundry, a screaming child weaving through the crowd. Somewhere, in the midst of 
it all, is the person you've been looking for: wearing a red and white striped shirt, black rimmed glasses 
and a lopsided cap. There he is! There's Waldo.
Many of us have fond memories of Waldo. 

But while he looms large in our imagination, our childhood searches for Waldo 
typically stayed pretty small – Waldo is a tiny person in the middle of lots of other tiny things.
And that's what this post is about: wee things. Specifically, the wee things that we see as part of graphics, maps, 
visualizations (wee things in space) as well as the wee things we experience as part of interactions, navigation, and 
usability (wee things in time). This means everything

from sequences of small graphics that help us make comparisons,
 to tiny locator maps that help orient us within a larger graphic, to navigation icons that give hints about how we 
 should make our way around a page.
Waldo, and the eternal search for him, can actually tell us quite a lot about design. In many ways, Waldo is a great
 example of what NOT to do when using wee things in your own work. So with Waldo as our anti-hero, let's take a look
  at how people read and interpret small visual forms, why tiny details can be hugely useful, and what principles 
  we can apply to make all these little images and 
  
  moments work for us as designers.
Wee Things In SpaceProbably the most immediate definition of wee things are things that are physically small: 
little things on a page. We see these all the time in news graphics, and we're probably familiar with some of 
their forms: small multiples, sparklines, icons, etc. I'll go into more details about all of these.
These visual forms work because they serve as extensions of our mind – they are cognitive tools that complement
 our own mental abilities. They do this by recording information for us to make use of later, lending a hand to our 
 (pretty terrible) working memories, helping us search and discover and recognize. We'll 
 take a look at one task in particular they 
 are great at: letting us make comparisons.
Make Comparisons forms: small multiples, sparklines, icons, etc. I'll go into more details about all of these.
These visual forms work because they se
rve as extensions of our mind – they are cognitive tools that complement
 our own mental abilities. They do this by recording information for us to make use of later, lending a hand to our 
 (pretty terrible) working memories, helping us search and discover and recognize. We'll 
 take a look at one task in particular they are great at: letting us make comparisons.
Make Comparisons   forms: small multiples, sparklines, icons, etc. I'll go into more details about all of these.
These visual forms work because they 
serve as extensions of our mind – they are cognitive tools that complement
 our own mental abilities. They do this by recording information for us to make use of later, lending a hand to our 
 (pretty terrible) working memories, helping us search and discover and recognize. We'll 
 take a look at one task in particular they are great at: letting us make comparisons.
Make Comparisons`;
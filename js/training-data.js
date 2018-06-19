const trainingData = [
    {
        input: "Inside Chi's nursery",
        output: { kardashian: 1 }
    },{
        input: "Why I dyed my hair pink",
        output: { kardashian: 1 }
    },{
        input: "Feeling Blue (wearing @kkwbeauty powder contour in medium & dark contour kit as eye shadow, & a new lip coming soon)",
        output: { kardashian: 1 }
    },{
        input: "SO excited!!! Who’s going to the @kkwbeauty pop-up in LA on June 20? 😍",
        output: { kardashian: 1 }
    },{
        input: "North Birthday Looks. 😍",
        output: { kardashian: 1 }
    },{
        input: "Nas listening party w @lala @jonathancheban",
        output: { kardashian: 1 }
    },{
        input: "OMG one of my fave twitter accounts got suspended @KimKanyeKimYeFC She spends so much time making the most amazing videos. Please twitter help us get her account back!",
        output: { kardashian: 1 }
    },{
        input: "What to do if you sleep in your makeup",
        output: { kardashian: 1 }
    },{
        input: "I had a very good convo with @jack this weekend at Kanye’s bday and I think he really heard me out on the edit button.",
        output: { kardashian: 1 }
    },{
        input: "Shooting the new @KKWBeauty nude lipstick model campaign: http://bit.ly/2JCUPSr",
        output: { kardashian: 1 }
    },{
        input: "Are you falling for these anti-aging myths?",
        output: { kardashian: 1 }
    },{
        input: "So honored to have won the 1st ever influencer @cfda influencer award. Thank u to Rick Owens for dressing me 😍I just love this pic with @andreltalley He has always been so kind & generous to me & my family! I love his new film The Gospel According To André! It’s a must see!",
        output: { kardashian: 1 }
    },{
        input: "YEEZY!! 🔥⚡️ Don’t miss the Kardashians vs Wests showdown on #CelebrityFamilyFeud TONIGHT AT 8|7c ON ABC! And stay tuned for #ToTellTheTruth starring #AnthonyAnderson at 10|9c! #FamilyFeud #SteveHarvey #KayneWest #Yeezy @kanyewest @IAmSteveHarvey",
        output: { kardashian: 1 }
    },{
        input: "Wow this picture just saved my life! 😍😍",
        output: { kardashian: 1 }
    },{
        input: "SHOP 8 NUDE LIPSTICKS & 3 NUDE LIP LINERS NOW AT http://KKWBEAUTY.COM  💋",
        output: { kardashian: 1 }
    },{
        input: "Happy Birthday babe @kanyewest !!!!! It’s been a wild year but we’re here & life is good! So proud of you dropping back to back albums & fulfilling your dreams. You inspire me to make the impossible always become a reality. Love you 💕",
        output: { kardashian: 1 }
    },{
        input: "The phone call I just had with Alice will forever be one of my best memories. Telling her for the first time and hearing her screams while crying together is a moment I will never forget.",
        output: { kardashian: 1 }
    },{
        input: "How to re-create my CFDA Awards hair",
        output: { kardashian: 1 }
    },{
        input: "6 am call time is tough going on no sleep but Steven Klein is worth it! #NewShootAlert",
        output: { kardashian: 1 }
    },{
        input: "Happy Birthday @MarcusHyde !!!!! Thank you for always capturing the dopest moments. We're grateful for your talent & can't wait to see your Wyoming pics.",
        output: { kardashian: 1 }
    },

    {
        input: "I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M. Enjoy!",
        output: { trump: 1 }
    },{
        input: "Dem Memo: FBI did not disclose who the clients were - the Clinton Campaign and the DNC. Wow!",
        output: { trump: 1 }
    },{
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: { trump: 1 }
    },{
        input: "Children are being used by some of the worst criminals on earth as a means to enter our country. Has anyone been looking at the Crime taking place south of the border. It is historic, with some countries the most dangerous places in the world. Not going to happen in the U.S.",
        output: { trump: 1 }
    },{
        input: "Why was the FBI giving so much information to the Fake News Media. They are not supposed to be doing that, and knowing the enemy of the people Fake News, they put their own spin on it - truth doesn’t matter to them!",
        output: { trump: 1 }
    },{
        input: "Washington Post employees want to go on strike because Bezos isn’t paying them enough. I think a really long strike would be a great idea. Employees would get more money and we would get rid of Fake News for an extended period of time! Is @WaPo a registered lobbyist?",
        output: { trump: 1 }
    },{
        input: "“Donald Trump was 100% right to fire James Comey.” Mark Levin",
        output: { trump: 1 }
    },{
        input: "Wow, the highest rated (by far) morning show, @foxandfriends, is on the Front Lawn of the White House. Maybe I’ll have to take an unannounced trip down to see them?",
        output: { trump: 1 }
    },{
        input: "Senator Claire McCaskill of the GREAT State of Missouri flew around in a luxurious private jet during her RV tour of the state. RV’s are not for her. People are really upset, so phony! Josh Hawley should win big, and has my full endorsement.",
        output: { trump: 1 }
    },{
        input: "...Got along great with Kim Jong-un who wants to see wonderful things for his country. As I said earlier today: Anyone can make war, but only the most courageous can make peace! #SingaporeSummit",
        output: { trump: 1 }
    },{
        input: "Just won big Supreme Court decision on Voting! Great News!",
        output: { trump: 1 }
    },{
        input: "Why should I, as President of the United States, allow countries to continue to make Massive Trade Surpluses, as they have for decades, while our Farmers, Workers & Taxpayers have such a big and unfair price to pay? Not fair to the PEOPLE of America! $800 Billion Trade Deficit...",
        output: { trump: 1 }
    },{
        input: "Sorry, we cannot let our friends, or enemies, take advantage of us on Trade anymore. We must put the American worker first!",
        output: { trump: 1 }
    },{
        input: "The Obama Administration is now accused of trying to give Iran secret access to the financial system of the United States. This is totally illegal. Perhaps we could get the 13 Angry Democrats to divert some of their energy to this “matter” (as Comey would call it). Investigate!",
        output: { trump: 1 }
    },{
        input: "Isn’t it Ironic? Getting ready to go to the G-7 in Canada to fight for our country on Trade (we have the worst trade deals ever made), then off to Singapore to meet with North Korea & the Nuclear Problem...But back home we still have the 13 Angry Democrats pushing the Witch Hunt!",
        output: { trump: 1 }
    },{
        input: "....The greatest Witch Hunt in political history!",
        output: { trump: 1 }
    },{
        input: "MAKING AMERICA GREAT AGAIN!",
        output: { trump: 1 }
    },{
        input: "Look how things have turned around on the Criminal Deep State. They go after Phony Collusion with Russia, a made up Scam, and end up getting caught in a major SPY scandal the likes of which this country may never have seen before! What goes around, comes around!",
        output: { trump: 1 }
    },{
        input: "During Small Business Week, we celebrate the great, hard-working entrepreneurs across our country who have started and operate a small business!",
        output: { trump: 1 }
    },{
        input: "#AMERICA FIRST!",
        output: { trump: 1 }
    }
 ]

 console.log("I hope you like this demo, the tweet diving was torture.");
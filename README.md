# second-chance-app
a full stack animal rescue / adoption app built using next.js with typescript & Prisma.

# what's it for:

-an app that facilitates animal rescues, adoptions & donations , ensures animal's wellfare and health care through connecting the animals
 to both the rescuers and the authorized shelters and vetinary clinics building a community of animal rescuers and ensuring safe supervised 
 & trusted connections for both the animal and the rescuer aiming to eventually improve animal rights awareness and their life's quality.

-------
# functionalities :

* user:
- report a rescue case 
- apply for adopting a selected animal
- put an animal for adoption
- accept adoption requests
- search for clinics
- search for shelters
- donate for a certified NGO
- from each donation given a certain percentage is added to a user's 
  app credit for only vetinary payments - to be given to other 
  users or use for your own in the collaborating clinics
- recieve app credits(other users control that)
- post reviews

* shelters:
- recieve donations 
- post donation cases
- post rescued animals for adoption 
- accept adoption requests
- post animal stories

(optional (allow chat between users and ngos ))
-------


# pages :

-authentication (login / signup) : as either user, shelter/clinic or admin

-homepage : general intro about the app, adoption/rescue stories user reviews + related articles 

-adoption& rescue : where a user can see the list of animals available for adoption be it a home to home or a rescue 

-donations : where a user can donate cash for a list of ngos or certain animal rescue cases i.e a surgery for a stray where the rescuer doesn't have the cash for it
 or post a case that needs donations where he/she can follow up with it through their profile page

-find clinics : where a user can find nearby clinics where they'd be rated and have their locations accessible via google maps

-find pet food stores: same same for food

-find shelters/ngos: lists the shelters and ngos in collaboration with the app

-ngo profile page: view an ngo to review & give donations to

-user profile : where a user (rescuer/owner/ngo) can view their activity, track the reported animals and accept adoption applications for their posted pets,
 view their donations and spend their app donation credit to other users or in other emergencies  

-animal details page : where a user can review the animal's story and adopt if that is what's decided

-put for adoption form : where a user can put his/her pet for adoption

-apply for adoption form : where a user fills in the info for adopting the animal and the 

-report a rescue form : where a user can report a case of an animal in need of rescuing by submitting 
    photos of the animal , 
    a location , 
    any needed details about the case 
    their name & phone number

-donate form : where a user can choose to donate money via credit card to eithier a specific case in need of donation or a certain shelter or foundation


----------------

# apis used 

-stripe
-google maps platform

----------------

# db design

-user:
name
address
phone no.
country
city
pets (one to many with animals )
donations (one to many with donations)
app credit

-animals:
name
age
type
breed
isAdopted
custody of: (one to many user)
location

-donations:
by(many to one user)
to(many to one organization)
amount
credit card info(still gonna read more into what is passed from the credit card in the db)

-organization:
name
location
address
phone no
history
rating
donations recieved (one to many donations)
sponsors (many to one sponsor)

-sponsor:
name
location:
address:
history

------------



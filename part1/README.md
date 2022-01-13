=======================================================================
Exploratory Testing Exercise part 1

Here I´ll perform some navigations and actions over the phptravels.net website provided for the exercise. As required, this test is not focused on testing the search tool, but the hotel booking functionality. In order to identify the scenarios, we see that there are some variables during the booking process:

- The user being logged or not: This is a feature that has impact directly on the personal information page, during the process after choosing our hotel.

- Number of rooms to book: Affects the pricing and taxes of the booking, and could give us some corner cases by testing the lowest and the highest amounts available.

- Number of guests of the room: It may add some charges to the pricing, or at least should ask for more information about the guests.

- Payment Method: Could be implied in the functionality.

- Paid or Cancelled: The final choice of the process will provide different cases.

- Discounts applied?: this could affect the pricing directly.

## Test Scenarios
**1.A logged user books a single room with no discount with a given payment method.**
First step is to log in, after that, we go to a user page with information like our current wallet balance and more information. 
If we search and click a hotel to book a room, then we have our personal information there in a non-editable form, and then we have a form to add the information of the room´s guests. 
After filling them up, we accept the conditions and terms and go to the final stage, where the booking is done.

Findings: 
- As expected, the user´s information is autocompleted in non-editable form inputs. We should still be able to change any of them. This seems too rude.
- We can proceed to next page without actually give the guests information. This could be a potential bug.
- Noted that the input fields have some format rules, like the email requiring to be a valid email address, but no pop-ups or error messages appear when we introduce a wrong input. 

**2.A logged user books 4 rooms with discount and a given payment method.**
First step is to log in, after that, we go to a user page with information like our current wallet balance and more information. 
If we search and click a hotel to book a room, then we have our personal information there in a non-editable form, and then we have a form to add the information of the room´s guests. 
After filling them up, we accept the conditions and terms and go to the final stage, where the booking is done.

Findings:
- No clues about discounts being applied are during this view (Personal info page and later). This may be a potential bug.
- There is a mismatch in the personal info page between the room´s guest availability and the number of guest inputs we can fill, also this amount of guests seems to be random between different rooms. Seems like a bug.
- The price is 4 times the single room´s price. That is correct.


**3.An unlogged user books a single room with a given payment method.**
First step is to log in, after that, we go to a user page with information like our current wallet balance and more information. 
If we search and click a hotel to book a room, then we a form to insert our personal data, and then we have a form to add the information of the room´s guests. 
After filling them up, we accept the conditions and terms and go to the final stage, where the booking is done.

Findings:
- The same issues detected in previous scenarios are appearing. We can get a booking if not logged in.

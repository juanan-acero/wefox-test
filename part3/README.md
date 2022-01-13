=======================================================================
Reflection on the automation exercise - Part 3

## 1. My thoughts on exercise two

During the part 2 I had to choose between a browser UI automated test, or an API automated test.
About my choice, I decided to go straight with one of the scenarios of the UI Automation part, since that was the main focus of the position I´m currently applying for. I also find UI testing more rewarding as I like to see my automation tests working. I even added some waiting times to the test to let the watcher see the progress on the browser´s window.

About the API testing part, I found it actually easier, but I find making API requests as something any developer or QA tester can actually do without many automation experience. That was my main reason to choose the UI Automation Exercise.

## 2. How could I describe the test I have just written?

That is actually easy to describe: it is a functional test. This type of tests are based on information previously defined and its main goal is to assure that the main functionalities of the application are working as expected. UI browser tests let to perform functional testing automatically so that there is not as many manual testing required as usual, so then time is saved while doing repetitive/iterative testing processes, such like regression testing or load testing. 

Of course there is strong relationship to the rest of the tecniques implied in the QA testing: performance testing, load testing, stress testing, etc. This automated tests allow the interconnection between different tools, givins as result inmense visibility over the quality of the product.


## 3. Outline the possibilities of automating these specific test cases in different scopes

Well said, the main target of performing automated functional testing is to reduce time and effort on repetitive work. 
Despite having benefits that manual testing does not have, it´s very far from replacing it in a laboral environment, as it required strongly defined functionalities and requirements to start being applied, and commonly requirements change over time, leaving a schedule tight to automate the tests. 
In that fashion, we focus on the most critic parts of the application to begin the automation, so manual testing can cover the most specific functionalities that have been affected by a change.


Pros:
- Repeatability: a guarantee that the created automated tests always follow the same algorithm, which cannot miss the required test in one of the cases of use.
- Fast result: requires less time as no need for a person to verify subtotals, to confirm the accuracy of meeting the requirements.
- Cheap: once developed software for testing needs less effort to analyze the obtained data. Same manual tests are done without loss in quality by the QA automation engineer.
- Easy to report: ready-made results are easy to process, and the reports themselves are easy to distribute to stakeholders.
- Free hands: a human tester, while the program is running, can perform other useful activities that are not subject to automation. It is allowed to conduct testing at a time when the load on the numerical resources is reduced (non-working hours).

Cons:
- Repeatability (yes, again): repetitive tests cannot hook other elements than those for which they are written. A person, on the other hand, can notice minor inconsistencies and understand the nature of the error or make fixes.
- Support: although the costs for manual testing are higher, automated tests also need to be updated and adjusted. This is done to ensure that the functionality of the tests matches the level of the application being tested. As the complexity of the tested software increases, there is a need to update the code of automated tests.
- Development: writing, and most importantly – debugging and testing automated tests is time-consuming. After all, software for software testing is nothing more than the same software. Only the functionality is very narrow.
- Costs: a licensed copy of the automation framework can require a fair amount of money. And although free options are also widely used, their functionality often leaves much to be desired, and the license should help if the problem described in paragraph 2 of this list occurs.
- Minor errors: automated tests might leave minor defects unnoticed. For example, defects that do not harm the functionality of the code, but spoil the visual interface and complicate the work of the end user (shifted windows, grammatical errors, etc.).


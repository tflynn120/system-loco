To run

-npm run dev

To test

-npm run test

If I had more time:

- More tests, test each deviceDetails section individually (summary, status etc) as well as test the response of when the fetch call fails
- Some data needs formattinG, mainly Dates
- CSS/styling, as this is a tech test styling this has been the least prioritised and hence leaves a lot to be desired compared to a production app

If I had more time #2:

- Gotten a bit carried away but tried to increase modularity, e.g api calls are now put inside their own hook and referenced inside a page component rather than defined inside a page component
- Set up reusable components e.g searchbar, inputfield etc. These aren't set up functionality wise but to set them up it would just involve passing optional props
- CSS improved on the device list page, if I had more time I would likely use seperate CSS files for each component/page and overall CSS quality could be improved
- The sidebar/navbar is not displayed for mobile devices just due to short time, if I had longer I would have placed this in the top navbar or had an extendable sidebar that would pop out on click, this is so it wouldn't take the size of the screen away from the table on smaller screen sizes
- formatted Dates, still could do with improving further by making them UK format
- Added spinner/loading context for better UI experience when making API calls

Following are two of the three strategies I know for quickly getting to green:
- **Fake It** — Return a constant and gradually replace constants with variables until you have the real code.
- **Use Obvious Implementation** — Type in the real implementation.”

When we **triangulate**, we only generalize code when we have two examples or more. 
We briefly ignore the duplication between test and model code. 
When the second example demands a more general solution, then and only then do we generalize.


### TODO LIST
- $5 + 10 CHF = $10 (if rate is 2:1)
- ~~$5 * 2 = $10~~
- ~~Make "amount" private~~
- ~~Dollar side effects?~~
- Money rounding?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5 CHF * 2 = 10 CHF~~
- Dollar/Franc duplication
- Common equals
- Common times

### PROCEDURE
1. Write a test. 
2. Make it compile. 
3. Run it to see that it fails. 
4. Make it run. 
5. Remove duplication.
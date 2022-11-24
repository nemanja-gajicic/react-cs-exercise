# Coolshop React Challenge 

### Nemanja Gajičić, mail: 
```
nemanja.gajicic@edu.itspiemonte.it 
nemanja.gajicic@gmail.com
```

### Exercise requirements
Write a simple React calculator (adder) that has the following mandatory 
functionalities:

* Rows can be added and removed
* Each row has a sign (minus or plus)
* Each row can be enabled or disabled by a dedicated control button. Disabled 
  rows must be excluded from the addition.
* The result must be updated "live" while the user is writing
* Feel free to add libraries if needed.

Structure and quality of the code, are a matter of evaluation

ES6+ Javascript knowledge is matter of evaluation

Look and feel of the solution is a plus

### Approach to solution
( before the start I created the project using [vite](https://vitejs.dev/), 
since it's lighter and a bit faster for development)
1) Identifying the components, I decided that each row should be a separate 
	component and then created a wrapper (CalculatorRowsList) that contains them
2) Creating the static versions of the components 
3) Deciding what will be my App state. Since I haven't got much experience in 
   React, I decided to lift the state up in the App component, thus reducing the
   complexity of the other custom components. The downside is of course the 
   "prop drilling" which could be resolved with Context API or Redux. I opted 
   against keeping the result in the state, since it can be computed based on
   the values of the existing inputs
4) Creating the event handlers. By far the most trouble I had was with the 
   handleDeleteClick function, where I tried using the previous state with the 
   filter method, but for whatever reason I just couldn't get it to work, so
   I just went old school and used splice. 
   My biggest doubt here is that I'm coupling the indexes in the calculatorRows
   array with the order in which the rows are displayed, but I didn't come up 
   with any other simpler or smarter solution, so I just stuck with that one
5) A bit of styling 

### Folder structure 
```
	src/
		css/
			styles.scss
		ts/
			components/
				CalculatorRow.tsx
				CalculatorRowsList.tsx
				Title.tsx
			App.tsx
		main.tsx
	index.html
	+ various config and node files	
```
### Technologies used: 
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

### How to run it:
```
npm install

npm run dev 

http://127.0.0.1:5173/
```
### Validation done for: 
- HTML (https://validator.w3.org/)
  
### Tested on: 
- Google Chrome Version 107.0.5304.107 
- Mozilla Firefox 106.0.5 
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer
- Recurrance Relation: The first step to finding the runtime of the function we have implemented is to find the reccurance relation. Then we will use the recurrance relation to determine the time complexity.  
- divideAndConquorSum: In this function we have 2 base cases. When the array is empty and when the array only has one element. When the input array is greater than 1. The function divides the array into 3 subarrays. Then the function recursively calls itself on each of the 3 subarrays created till the base case are reached. This is where the total can be added up.
  - Base cases:
     1. $T(0) = 1$
     2. $T(1) = 1$
  - Recursive calls:
    1. When we are not in the base cases. The function will make 3 recursive calls on the subarrays from the initial input array.
- Knowing this will help us determine the recurance relation.
  - Recurrance relation:
    - $T(n) = 3 \cdot T \left(\frac{n}{3}\right) + c $
- Solving The Recurrance Relation: We need to solve the reccurance relation in order to determine the time complexity. To do this we need to first start by expanding the recurrence relation to find a pattern that help us solve the recurance relation.
  - $T(n) = 3 \cdot T \left(\frac{n}{3}\right) + c $
  - $T\left(\frac{n}{3}\right) = 3\cdot \left(3\cdot T \left(\frac{n}{9}\right) + c\right) + c $
  - $T\left(\frac{n}{9}\right) = 3^{3} \cdot T\left(\frac{n}{27}\right) + 3^{2}c + 3c + c $
- After a few iterations we can start to see a pattern and write this in a general form.
  - $T(n) = 3^{k} \cdot T(\frac{n}{3^{k}}) + c \cdot \sum_{i=0}^{k-1} 3^i $
- We can see that in this general pattern the summation is a geometric series and can find a value for k that will make
$\frac{n}{3^{k}} = 1$.
  - $\frac{n}{3^{k}} = 1$
  - $n = 3^{k}$
  - $k = \log_{3}n$
- We know place this $k$ value back into the equation.
  - $T(n) = 3^{\log_{3}n} \cdot T(1) + c \cdot \sum_{i = 0}^{\log_{3}n -1} 3^{i}$
- Using the general form for the geometric series we can simpilify the summation down to.
  - $\frac{n - 1}{2}$
- We can now substitute this back into our equation and get.
  - $T(n) = n \cdot T(1) + c \cdot \frac{n - 1}{2}$
- Now we can see that because of the base case $T(1) = 1$, and in the $\frac{n - 1}{2}$ portion the domaninant term is $n$ which is linear. We can say $T(n) \in \Theta(n)$.

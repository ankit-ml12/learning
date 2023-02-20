#### Leverage Javascript

- in some api there is some element and value are missing so when we fetch them and try to show them
- then our project willnot work because we are trying to access the undefine element
- so to avoid that we first initilize constant value of all variable which is not present then we use nullish operator to access them from api
- like const img = images?.[0]?.small?.url ?? avatar;
- or you can also use && oprator like this
- const img = (images && images[0] && images[0].small && images[0].small.url) || avatar;
- for above example we need to initilise api

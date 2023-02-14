### slider timeout issue

1. if you use settime out to run slider every 3 sec
2. but is user call that button 100s of time then it create 100s of callback function which again create next 100s because we are changing the parameter of the useState
3. to avaid that

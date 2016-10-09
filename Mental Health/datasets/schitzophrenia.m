t = load('schitzophrenia.dat');
x = t'(1,:);
y = t'(2,:);

p = polyfit(x, log(y), 3)

polyout(p, "x");

a = plot(x, log(y), "*", x, polyval(p, x), "+");
xlabel("sleep");
ylabel("sch. level");
legend("Data points", "Linear Fit");

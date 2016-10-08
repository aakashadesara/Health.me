t = load('schitzophrenia.dat');
x = t'(1,:);
y = t'(2,:);


p = polyfit(x, log(y), 1)

polyout(p, "x");

plot(x, log(y), "*", x, polyval(p, x), "-");
xlabel("Inputs");
ylabel("Outputs");
legend("Data points", "Linear Fit");

print "Schitzophrenia"

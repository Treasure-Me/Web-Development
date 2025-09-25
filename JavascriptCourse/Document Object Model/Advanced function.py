import math
import numpy as np

# Get function from user
function = input("Enter your function of x (f(x)):\n")

# Grid size
x_min, x_max = -50, 50
y_min, y_max = -20, 20
step = 0.5  # x resolution

# Generate grid
xs = np.arange(x_min, x_max + step, step)

for y in range(y_max, y_min - 1, -1):
    line = ""
    for x in xs:
        # Safe eval: only x and math allowed
        try:
            val = eval(function, {"x": x, "math": math})
        except Exception:
            val = None
        
        # Plot if function is close to current y
        if val is not None and abs(val - y) < 0.5:
            line += "o"
        elif abs(x) < 1e-9 and abs(y) < 1e-9:
            line += "+"
        elif abs(y) < 1e-9:
            line += "-"
        elif abs(x) < 1e-9:
            line += "|"
        else:
            line += " "
    print(line)

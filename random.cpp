#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int n = 5;
    int a = 0, b = 1;
    while (a <= n)
    {
        int c = a + b;
        cout << a << " ";
        a = b;
        b = c;
    }
    return 0;
}
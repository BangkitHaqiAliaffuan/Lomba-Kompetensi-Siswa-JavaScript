#include <iostream>
using namespace std;

int main()
{
    int nilai;
    cout << "Masukkan Nilai Anda : ";
    cin >> nilai;

    if (nilai > 100 || nilai < 0)
    {
        cout << "Nilai Anda Tidak Valid";
    }
    else if (nilai >= 80 && nilai <= 90)
    {
        cout << "B";
    }
    else if (nilai >= 70 && nilai <= 80)
    {
        cout << "C";
    }
    else if (nilai >= 60 && nilai <= 70)
    {
        cout << "D";
    }
    else if (nilai > 90)
    {
        cout << "A";
    }
    else
    {
        cout << "Anda Tidak Lulus";
    }

    return 0;
}
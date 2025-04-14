#include <iostream>
using namespace std;

int main(){
   int t;
   cout << "Masukkan Tinggi Segitiga Anda : ";
   cin >> t;

    for(int i = 0; i <= t; i++){
        for (int a = t; a >= t; a--){
            cout << "*";
        }
        cout << endl;
    }

   return 0; 
}
#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int cal(vector<string> & v, int size){

    int sumOfHour = 0;
    int sumOfMinute = 0;
    for(string x : v){
        string hour;
        string minute;
        if(x.size() == 5){
            hour = x.substr(0,2);
            minute = x.substr(3,2);
        }else{
            hour = x.substr(0,1);
            minute = x.substr(2,2);
        }

        cout << hour << ' ' << minute << '\n';
        sumOfHour += stoi(hour);
        sumOfMinute += stoi(minute);
    }


    return sumOfHour*60 + sumOfMinute;

}
int main(){

    string s = "12:50\n"
               "20:30\n"
               "6:45\n"
               "15:36\n"
               "20:11\n"
               "12:54\n"
               "10:57\n"
               "9:39\n"
               "10:20\n"
               "6:21\n"
               "5:48\n"
               "10:18\n"
               "4:56\n"
               "5:44\n"
               "6:26\n"
               "6:08\n"
               "14:10\n"
               "10:56\n"
               "14:02\n"
               "9:37\n"
               "14:52\n"
               "14:50\n"
               "14:31\n"
               "19:26\n"
               "4:40\n"
               "5:53\n"
               "10:43\n"
               "5:57\n"
               "16:19\n"
               "9:45\n"
               "5:50\n"
               "11:00\n"
               "27:43\n"
               "13:05\n"
               "13:49\n"
               "11:57\n"
               "4:19\n"
               "12:24\n"
               "21:21\n"
               "9:04\n"
               "5:18\n"
               "14:51\n"
               "17:52\n"
               "7:46\n"
               "8:08\n"
               "8:27\n"
               "7:31\n"
               "7:21\n"
               "10:36\n"
               "7:42\n"
               "6:29\n"
               "4:43\n"
               "4:42\n"
               "7:55\n"
               "5:39\n"
               "5:24\n"
               "4:29\n"
               "4:50\n"
               "7:04\n"
               "9:06\n"
               "5:52\n"
               "5:32\n"
               "20:17\n"
               "7:16\n"
               "9:00\n"
               "5:30\n"
               "7:00\n"
               "5:58\n"
               "7:24\n";

    istringstream iss(s);
    string token;
    vector<string> f;

    while(getline(iss, token, '\n')){
        f.push_back(token);
    }

    int size = f.size();

    int sum = cal(f,size);

    cout << (double)sum/3600 << '\n';

    return 0;
}

/**
 * st
 */
public class st {

    public static void main(String[] args) {
        int x = 10;
        int y = 2;
        int ans = divied(x,y);
        System.out.println(ans);
    }

    private static int divied(int x, int y){
        int count = 0;
        if (x%y == 0) {
            while (x - y != 0) {
                x = x - y;
                count+=1;
            }            
        }
        return count;
    }

}
public class Myself
{
    public static void main(String args[]) throws IOException {
        InputStreamReader read = new InputStreamReader(System.in);
        BufferedReader in = new BufferedReader(read);
        
        System.out.print("Enter your name: ");
        String name = in.readLine();
        
        System.out.print("Height: ");
        String Height = in.readLine();
        
        System.out.print("Country: ");
        String country = in.readLine();
              
        System.out.println("My name: " + name);
        System.out.println("Height: " + height);
        System.out.println("Country: " + country);
    }
}

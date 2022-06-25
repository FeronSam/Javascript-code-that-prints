public class Myself
{
    public static void main(String args[]) throws IOException {
        InputStreamReader read = new InputStreamReader(System.in);
        BufferedReader in = new BufferedReader(read);
        
        System.out.print("Enter your name: ");
        String name = in.readLine();
        
        System.out.print("Enter your Father's name: ");
        String father = in.readLine();
        
        System.out.print("Enter your address: ");
        String address = in.readLine();
        
        System.out.print("Enter your contact number: ");
        long number = Long.parseLong(in.readLine());
        
        System.out.println("My name: " + name);
        System.out.println("Father's name: " + father);
        System.out.println("Postal address: " + address);
        System.out.println("Contact Number: " + number);
    }
}

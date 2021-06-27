public class MyApp {
  public static void main (String[] argv) {
      java.util.Scanner userinput;

      while (true) {
          System.out.print("Command> ");
          userinput = new java.util.Scanner(System.in);
          String cmd = userinput.next();
          System.out.println("You selected " + cmd + ".");
      }
      ZipCode myZipCode = new ZipCode("07087");
      Music mySong = new Music("Happy");
      Television myShow = new Television("Game of Thrones");
    
      System.out.println( "Hey I live in zipcode " + myZipCode + " and my favorite tv show is " + myShow + " and im currently jamming to " + mySong );
    
  }

}
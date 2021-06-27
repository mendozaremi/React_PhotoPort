public class MyApp {
  public static void main (String[] argv) {
      java.util.Scanner userinput;

      // while (true) {
          System.out.println ("Options: ZipCode  Television  Music  Wiki");
          System.out.print("Command> ");
          userinput = new java.util.Scanner(System.in);
          String cmd = userinput.next();
          System.out.println("You selected " + cmd + ".");

          if(cmd.equals("ZipCode")) {

            System.out.print("Enter a Zipcode> ");
            userinput = new java.util.Scanner(System.in);
            String cmd2 = userinput.next();

            System.out.println(new ZipCode(cmd2).get());

          } else if (cmd.equals("Television")) {

            System.out.print("Enter a TV Show ");
            userinput = new java.util.Scanner(System.in);
            String cmd3 = userinput.next();

            System.out.println(new Television(cmd3).get());

          } else if (cmd.equals("Music")) {

            System.out.print("Enter a song or artist ");
            userinput = new java.util.Scanner(System.in);
            String cmd4 = userinput.next();

            System.out.println(new Music(cmd4).get());

          } else if (cmd.equals("Wiki")) {

            System.out.print("Enter anything you would like to search on Wikipedia (use hypens not spaces) ");
            userinput = new java.util.Scanner(System.in);
            String cmd5 = userinput.next();

            System.out.println(new Wiki(cmd5).get());

          } else {
            System.out.println(cmd + "Is not a verfied option from above");

          }
      // }
  }
}
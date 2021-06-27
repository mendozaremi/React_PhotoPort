public class Wiki extends ServiceCommunicator {

    public Wiki (String WikiPage) {
      super("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + WikiPage+ "&format=json");
      
    }
  
    public static void main (String[] argv) {
      System.out.println(" <------ TEST OF WIKI.JAVA ------>");
      System.out.println(new Wiki("Rembrandt").get());
    }
  }
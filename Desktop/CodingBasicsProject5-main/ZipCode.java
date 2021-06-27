public class ZipCode extends ServiceCommunicator{
    
    public ZipCode(String zipcode) {

        super("http://api.zippopotam.us/us/" + zipcode);
    }

    public static void main(String[] argv) {
       System.out.println(" <------ TEST OF ZIPCODE.JAVA ------>");
       System.out.println(new ZipCode("10040").get());
      }
}

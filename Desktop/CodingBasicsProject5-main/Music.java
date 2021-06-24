public class Music extends ServiceCommunicator{
    public Music(String songTitle) {
        super("https://itunes.apple.com/search?term=" + songTitle + "&limit=1")
    }
    
    public static void main(String[] argv) {
        System.out.println(new Music("Happy").get());
    }
}
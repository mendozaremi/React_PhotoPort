public class Music extends ServiceCommunicator{

    public Music(String songTitle) {
        super("https://itunes.apple.com/search?term=" + songTitle + "&limit=2");
    }
    
    public static void main(String[] argv) {
        System.out.println(" <------ TEST OF MUSIC.JAVA ------>")
        System.out.println(new Music("Drake").get());
    }
}
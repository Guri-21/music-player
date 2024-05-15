import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

import java.io.File;

public class MusicPlayer extends Application {

    private MediaPlayer mediaPlayer;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        Button openButton = new Button("Open File");
        openButton.setOnAction(e -> openFile(primaryStage));

        Button playButton = new Button("Play");
        playButton.setOnAction(e -> {
            if (mediaPlayer != null) {
                mediaPlayer.play();
            }
        });

        Button pauseButton = new Button("Pause");
        pauseButton.setOnAction(e -> {
            if (mediaPlayer != null) {
                mediaPlayer.pause();
            }
        });

        Button stopButton = new Button("Stop");
        stopButton.setOnAction(e -> {
            if (mediaPlayer != null) {
                mediaPlayer.stop();
            }
        });

        VBox root = new VBox(10, openButton, playButton, pauseButton, stopButton);
        Scene scene = new Scene(root, 300, 200);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Music Player");
        primaryStage.show();
    }

    private void openFile(Stage primaryStage) {
        FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("Open Music File");
        File file = fileChooser.showOpenDialog(primaryStage);
        if (file != null) {
            Media media = new Media(file.toURI().toString());
            if (mediaPlayer != null) {
                mediaPlayer.stop();
            }
            mediaPlayer = new MediaPlayer(media);
            mediaPlayer.play();
        }
    }
}

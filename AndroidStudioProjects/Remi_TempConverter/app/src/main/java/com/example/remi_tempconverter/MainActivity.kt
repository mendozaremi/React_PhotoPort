package com.example.remi_tempconverter

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Create variables for buttons and all user inputs
        val celsius: EditText = findViewById(R.id.celsius)
        val fahrenheit: EditText = findViewById(R.id.fahrenheit)
        val convert: Button = findViewById(R.id.convert)
        val reset: Button = findViewById(R.id.reset)

        // Create event Listener for click on convert button
        convert.setOnClickListener {
            val attention: String = resources.getResourceEntryName(currentFocus!!.id)

            if(attention == "fahrenheit") {
                val calculation = convertToCelsius(fahrenheit.text.toString())
                celsius.setText(calculation)
            }
            else if(attention == "celsius"){
                val calculation = convertToFahrenheit(celsius.text.toString())
                fahrenheit.setText(calculation)
            }
        }
        // Create event Listener for click on reset button
        reset.setOnClickListener{
            celsius.setText("")
            fahrenheit.setText("")
        }
    }
        // Create function to convert Fahrenheit to Celsius
     private fun convertToCelsius(digits: String): String {
        return if(digits != "") {
            val input = digits.toFloat()
            val result = (input - 32) * .5556f
            result.toString()
        } else {""}
    }
        // Create function to convert Celsius to Fahrenheit
     private fun convertToFahrenheit(digits: String): String {
        return if(digits != "") {
            val input = digits.toFloat()
            val result: Float = (input * 1.8f) + 32
            result.toString()
        } else {""}
    }
}
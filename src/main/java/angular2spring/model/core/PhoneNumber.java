package angular2spring.model.core;

import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class PhoneNumber {
	
	private static final String PHONE_REGEX = "(\\d{3})(\\[-])(\\d{7})$";
	private static final Pattern PATTERN = Pattern.compile(PHONE_REGEX);
	
	private String value;

	public PhoneNumber(String phoneNumber) {
		//Assert.isTrue(isValid(phoneNumber), "Invalid phoneNumber!");
		this.value = phoneNumber;
	}

	
	public PhoneNumber () {
		
	}
	

	public static boolean isValid(String candidate) {
		return candidate == null ? false : PATTERN.matcher(candidate).matches();
	}

	@Column(name="phone")
	@JsonProperty("contactPhoneNumber")
	public String getValue() {
		return value;
	}


	public void setValue(String phoneNumber) {
		this.value = phoneNumber;
	}
	
	@Override
	public String toString() {
		return value;
	}


	
	
	
}

package angular2spring.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.util.Assert;

import com.fasterxml.jackson.annotation.JsonUnwrapped;

import angular2spring.model.core.AbstractEntity;
import angular2spring.model.core.Address;
import angular2spring.model.core.EmailAddress;
import angular2spring.model.core.PhoneNumber;

@Entity
public class Account extends AbstractEntity   {

	String name, code, contactName, dynamicJsonTable;
	

	private EmailAddress contactEmailAddress;
	
	private PhoneNumber contactPhoneNumber;

	private Set<Address> addresses = new HashSet<Address>();

	
	public Account(){
		super();
	}
	
	public Account(String name, String code,  String contactName, EmailAddress contactEmailAddress, PhoneNumber contactPhoneNumber) {
		this.name=name;
		this.code=code;
		this.contactName=contactName;
		this.contactEmailAddress=contactEmailAddress;
		this.contactPhoneNumber=contactPhoneNumber;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "account_id")
	public Set<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(Set<Address> addresses) {
		this.addresses = addresses;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	@Column(unique = true)
	@JsonUnwrapped
	public EmailAddress getContactEmailAddress() {
		return contactEmailAddress;
	}

	public void setContactEmailAddress(EmailAddress contactEmailAddress) {
		this.contactEmailAddress = contactEmailAddress;
	}
	
	@JsonUnwrapped
	public PhoneNumber getContactPhoneNumber() {
		return contactPhoneNumber;
	}

	public void setContactPhoneNumber(PhoneNumber contactPhoneNumber) {
		this.contactPhoneNumber = contactPhoneNumber;
	}
	
	public void add(Address address) {

		Assert.notNull(address);
		this.addresses.add(address);
	}

	@Column(columnDefinition="text")
	public String getDynamicJsonTable() {
		return dynamicJsonTable;
	}

	public void setDynamicJsonTable(String dynamicJsonTable) {
		this.dynamicJsonTable = dynamicJsonTable;
	}

}

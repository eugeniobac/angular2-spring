package angular2spring.model.core;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import angular2spring.model.User;

/**
 * Stores the history associated with a persistent entity.
 * <p>
 * Almost every database table in the omni schema has the following columns:
 * CREUSER, CREDATE, UPDUSER, UPDDATE. These indicate who created the record and
 * when, and who last updated the record and when. This class represents these
 * common fields; other Entity classes just declare a one-to-one relation with
 * this entity, and because this is marked embeddable it will be persisted into
 * the same table as the referencing entity.
 * <p>
 * Note that there is no real need for tracing from the history info to the
 * actual User object, so this object deals in user IDs rather than references
 * to real User objects.
 */
@Embeddable
public class History {

	/**
	 * 
	 */

	private User createUser;
	private Date createDate;
	private User updateUser;
	private Date updateDate;

	public History() {
		super();
	}

	public History(User user) {
		this.createUser = user;
		this.updateUser = user;
		this.createDate = new Date();
		this.updateDate = new Date();
	}

	/**
	 * The user who created the parent entity.
	 */

	/**
	 * The date at which the parent entity was first persisted into the
	 * database.
	 */
	@Column(name = "CREDATE")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	/**
	 * The user who last updated the parent entity.
	 */

	/**
	 * The date at which the parent entity was last updated in the database.
	 */
	@Column(name = "UPDDATE")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	public Date getUpdateDate() {
		return this.updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public String toString() {
		return createUser.getId() + " (" + createDate + ") / " + updateUser.getId() + " (" + updateDate + ")";
	}

	@ManyToOne
	public User getCreateUser() {
		return createUser;
	}

	public void setCreateUser(User createUser) {
		this.createUser = createUser;
	}

	@ManyToOne
	public User getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(User updateUser) {
		this.updateUser = updateUser;
	}

}
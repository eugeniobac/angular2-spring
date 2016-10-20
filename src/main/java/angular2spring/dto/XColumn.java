package angular2spring.dto;

public class XColumn {
	String field;
	String header;
	
	public XColumn(String field, String header) {
		this.field=field;
		this.header=header;
	}
	public String getField() {
		return field;
	}
	public void setField(String field) {
		this.field = field;
	}
	public String getHeader() {
		return header;
	}
	public void setHeader(String header) {
		this.header = header;
	}

}

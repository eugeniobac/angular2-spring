package angular2spring.dto;

import java.util.HashMap;
import java.util.List;

public class DynamicTable {
	List<XColumn> columns;
	List<HashMap<String, String>> data;

	
	public List<XColumn> getColumns() {
		return columns;
	}

	public void setColumns(List<XColumn> columns) {
		this.columns = columns;
	}


	public List<HashMap<String, String>> getData() {
		return data;
	}

	public void setData(List<HashMap<String, String>> data) {
		this.data = data;
	}


	

}

package angular2spring.model.core;

import javax.persistence.Embeddable;
import javax.persistence.MappedSuperclass;

@Embeddable
@MappedSuperclass
// @EntityListener(com.obsidium.omni.common.model.HistoryListener.class)

public class EntityHistory {

	private History history;

	public History getHistory() {
		return history;
	}

	public void setHistory(History history) {
		this.history = history;
	}

}

#include <stdio.h>
#include <string.h>
#include <math.h>
#include "esp_system.h"
#include "kidbright32.h"
#include "driver/uart.h"
#include "soc/uart_struct.h"
#include "<%= className %>.h"


<%= className %>::<%= className %>() {
  polling_ms = <%= className %>_POLLING_MS;
}

void <%= className %>::init(void) {
  state = s_detect;
  initialized = true;
}

int <%= className %>::prop_count(void) {
  // not supported
  return 0;
}

bool <%= className %>::prop_name(int index, char *name) {
  // not supported
  return false;
}

bool <%= className %>::prop_unit(int index, char *unit) {
  // not supported
  return false;
}

bool <%= className %>::prop_attr(int index, char *attr) {
  // not supported
  return false;
}

bool <%= className %>::prop_read(int index, char *value) {
  // not supported
  return false;
}

bool <%= className %>::prop_write(int index, char *value) {
  // not supported
  return false;
}

void <%= className %>::process(Driver *drv) {
//  char buffer[64];
//  sprintf(buffer, "%lldms\n", (esp_timer_get_time() / 1000));
//  uart_write_bytes(UART_NUM_0, (const char*)buffer, strlen(buffer));
}


char* <%= className %>::random() {
    return "nat-random";
}

